import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (you'll customize these based on your Supabase tables)
export type Profile = {
  id: string
  username: string
  email: string
  avatar_url?: string
  role: 'fan' | 'wrestler' | 'admin'
  created_at: string
}

export type ChatMessage = {
  id: string
  user_id: string
  username: string
  message: string
  room: string
  created_at: string
}

export type PollVote = {
  id: string
  poll_id: string
  user_id: string
  option_index: number
  created_at: string
}

// Helper functions for common operations
export const supabaseHelpers = {
  // Get user profile
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    return { data, error }
  },

  // Send chat message
  async sendChatMessage(userId: string, username: string, message: string, room: string = 'general') {
    const { data, error } = await supabase
      .from('chat_messages')
      .insert([
        { user_id: userId, username, message, room }
      ])
      .select()
    
    return { data, error }
  },

  // Subscribe to chat messages
  subscribeToChatMessages(room: string, callback: (message: ChatMessage) => void) {
    return supabase
      .channel(`chat:${room}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `room=eq.${room}`
        },
        (payload) => callback(payload.new as ChatMessage)
      )
      .subscribe()
  },

  // Vote on poll
  async votePoll(pollId: string, userId: string, optionIndex: number) {
    // First check if user already voted
    const { data: existingVote } = await supabase
      .from('poll_votes')
      .select('*')
      .eq('poll_id', pollId)
      .eq('user_id', userId)
      .single()
    
    if (existingVote) {
      return { data: null, error: { message: 'Already voted' } }
    }

    const { data, error } = await supabase
      .from('poll_votes')
      .insert([
        { poll_id: pollId, user_id: userId, option_index: optionIndex }
      ])
      .select()
    
    return { data, error }
  },

  // Get poll results
  async getPollResults(pollId: string) {
    const { data, error } = await supabase
      .from('poll_votes')
      .select('option_index')
      .eq('poll_id', pollId)
    
    if (error) return { data: null, error }

    // Count votes for each option
    const results: { [key: number]: number } = {}
    data.forEach((vote) => {
      results[vote.option_index] = (results[vote.option_index] || 0) + 1
    })

    return { data: results, error: null }
  },
}

