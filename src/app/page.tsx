"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ModeToggle } from "@/components/theme_button";

interface Alert {
  title: string;
  description: string;
  link: string;
  image: string | null;
  country: string;
  lat: string | null;
  long: string | null;
  alertLevel: string;
}

export default function Home() {
  const [topAlerts, setTopAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const getAlerts = async () => {
      try {
        const res = await axios.get<Alert[]>("/api/gdacs");
        console.log(res.data);
        setTopAlerts(res.data);
      } catch (err) {
        console.error("Failed to load alerts", err);
      }
    };

    getAlerts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-transparent">
      <h1 className="text-3xl font-bold mb-6">Top 5 GDACS Alerts</h1>
      <ModeToggle />
      <div className="space-y-6 w-full max-w-2xl">
        {topAlerts.map((alert, i) => (
          <div key={i} className="border p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{alert.title}</h2>
            <p className="text-gray-700">{alert.description}</p>
            <p className="text-sm text-gray-500 mt-1">🌍 {alert.country}</p>
            <p className="text-sm text-gray-500">🟢 Alert Level: {alert.alertLevel}</p>
            {alert.image && (
              <img
                src={alert.image}
                alt="alert visual"
                className="mt-3 rounded max-h-60 object-contain"
              />
            )}
            <a
              href={alert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 underline"
            >
              Read more
            </a>
            
          </div>
        ))}
      </div>
    </main>
  );
}
