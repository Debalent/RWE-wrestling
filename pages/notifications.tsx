import React, { useState } from "react";

// Notifications & Campaigns Page for RWE
// Preview and send push & SMS alerts
export default function NotificationsPage() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "push",
      message: "New show announced: Winter Slam 2025!",
      sent: false,
    },
    {
      id: 2,
      type: "sms",
      message: "Flash sale on merch ends tonight! Use code RWE20.",
      sent: true,
    },
  ]);

  const sendAlert = (id) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, sent: true } : alert
      )
    );
    alert("Alert sent!");
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        📣 Notifications & Campaigns
      </h1>

      <section className="max-w-3xl mx-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-gray-800 p-4 rounded-xl mb-4 shadow flex justify-between items-center"
          >
            <div>
              <strong className="capitalize">{alert.type} Alert:</strong>{" "}
              {alert.message}
            </div>
            <button
              onClick={() => sendAlert(alert.id)}
              disabled={alert.sent}
              className={`px-4 py-2 rounded text-white ${
                alert.sent
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {alert.sent ? "Sent" : "Send"}
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
