"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { Arduino } from "@/types";
import { API_URL } from "@/lib/utils";

const useArduino = () => {
  const [allDevices, setAllDevices] = useState<Arduino[]>([]);
  const [singleDevice, setSingleDevice] = useState<Arduino | null>(null);
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Store timer

  const getAllArduino = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/arduinos`);
      setAllDevices(data.data);
    } catch (error) {
      console.error("Error fetching all Arduino devices:", error);
    }
  }, []);

  const getArduinoById = useCallback(async (id: string) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/arduinos/${id}`);
      setSingleDevice(data.data);
    } catch (error) {
      console.error("Error fetching Arduino device by ID:", error);
    }
  }, []);

  useEffect(() => {
    let eventSource = new EventSource(`http://localhost:4000/api/events`);

    eventSource.onmessage = (event) => {
      try {
        const receivedData = JSON.parse(event.data);
        console.log("Received SSE data:", receivedData);

        if (receivedData.updates) {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }

          timerRef.current = setTimeout(() => {
            setLastUpdated(Date.now());
          }, 10000);
        }
      } catch (err) {
        console.error("Error parsing SSE data:", err);
      }
    };

    eventSource.onerror = (error) => {
      console.error("SSE connection lost, retrying...", error);
      setTimeout(() => {
        eventSource.close();
        eventSource = new EventSource(`http://localhost:4000/api/events`);
      }, 3000);
    };

    return () => {
      eventSource.close();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    getAllArduino();
  }, []);

  return {
    allDevices,
    singleDevice,
    lastUpdated,
    refresh: getAllArduino,
    getArduinoById,
  };
};

export default useArduino;
