"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import axios from "axios";
import { ArrowLeft, Mail, Clock, Calendar, CheckCircle2, Loader2, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { DSA_TOPICS } from "@/utils/dsaQuestions";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const DSASettings = () => {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [preferences, setPreferences] = useState({
    topics: [],
    frequency: "daily",
    sendTime: "19:00",
    startDate: "",
    endDate: "",
    isActive: true,
  });

  // Fetch existing preferences on load
  useEffect(() => {
    if (isLoaded && user) {
      fetchPreferences();
    }
  }, [isLoaded, user]);

  const fetchPreferences = async () => {
    try {
      const res = await axios.get("/api/dsa-preferences");
      if (res.data) {
        setPreferences({
          topics: res.data.topics || [],
          frequency: res.data.frequency || "daily",
          sendTime: res.data.sendTime || "19:00",
          startDate: res.data.startDate || "",
          endDate: res.data.endDate || "",
          isActive: res.data.isActive ?? true,
        });
      } else {
        // Set default dates for new users
        const today = new Date();
        const oneMonthLater = new Date(today);
        oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
        
        setPreferences((prev) => ({
          ...prev,
          startDate: today.toISOString().slice(0, 10),
          endDate: oneMonthLater.toISOString().slice(0, 10),
        }));
      }
    } catch (error) {
      console.error("Error fetching preferences:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTopicToggle = (topic) => {
    setPreferences((prev) => {
      const newTopics = prev.topics.includes(topic)
        ? prev.topics.filter((t) => t !== topic)
        : [...prev.topics, topic];
      return { ...prev, topics: newTopics };
    });
  };

  const handleSave = async () => {
    if (preferences.topics.length === 0) {
      toast.error("Please select at least one topic");
      return;
    }
    if (!preferences.startDate || !preferences.endDate) {
      toast.error("Please select start and end dates");
      return;
    }

    setSaving(true);
    try {
      await axios.post("/api/dsa-preferences", preferences);
      toast.success("Preferences saved! You'll receive questions via email.");
    } catch (error) {
      console.error("Error saving preferences:", error);
      toast.error("Failed to save preferences");
    } finally {
      setSaving(false);
    }
  };

  const handleUnsubscribe = async () => {
    if (!confirm("Are you sure you want to unsubscribe from DSA emails?")) {
      return;
    }

    setSaving(true);
    try {
      await axios.delete("/api/dsa-preferences");
      setPreferences({
        topics: [],
        frequency: "daily",
        sendTime: "19:00",
        startDate: "",
        endDate: "",
        isActive: true,
      });
      toast.success("You have been unsubscribed");
    } catch (error) {
      console.error("Error unsubscribing:", error);
      toast.error("Failed to unsubscribe");
    } finally {
      setSaving(false);
    }
  };

  const setDuration = (months) => {
    const today = new Date();
    const endDate = new Date(today);
    endDate.setMonth(endDate.getMonth() + months);

    setPreferences((prev) => ({
      ...prev,
      startDate: today.toISOString().slice(0, 10),
      endDate: endDate.toISOString().slice(0, 10),
    }));
  };

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dsa-prep" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to DSA Prep
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">DSA Email Settings</h1>
          <p className="text-gray-600 mt-2">
            Configure your daily/weekly DSA practice questions delivered to your inbox.
          </p>
        </div>

        {/* Email Info Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Email Delivery</h2>
          </div>
          <p className="opacity-90">
            Questions will be sent to: <strong>{user?.primaryEmailAddress?.emailAddress}</strong>
          </p>
        </div>

        {/* Main Settings Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Topics Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              📚 Select Topics ({preferences.topics.length} selected)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {DSA_TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleTopicToggle(topic)}
                  className={`p-3 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                    preferences.topics.includes(topic)
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 hover:border-gray-300 text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {preferences.topics.includes(topic) && (
                      <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    )}
                    <span className="truncate">{topic}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Frequency */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🔄 Frequency
            </h3>
            <Select
              value={preferences.frequency}
              onValueChange={(value) =>
                setPreferences((prev) => ({ ...prev, frequency: value }))
              }
            >
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly (Every Monday)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Send Time */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" /> Preferred Time (UTC)
            </h3>
            <Select
              value={preferences.sendTime}
              onValueChange={(value) =>
                setPreferences((prev) => ({ ...prev, sendTime: value }))
              }
            >
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="06:00">6:00 AM</SelectItem>
                <SelectItem value="07:00">7:00 AM</SelectItem>
                <SelectItem value="08:00">8:00 AM</SelectItem>
                <SelectItem value="09:00">9:00 AM</SelectItem>
                <SelectItem value="12:00">12:00 PM</SelectItem>
                <SelectItem value="17:00">5:00 PM</SelectItem>
                <SelectItem value="18:00">6:00 PM</SelectItem>
                <SelectItem value="19:00">7:00 PM</SelectItem>
                <SelectItem value="20:00">8:00 PM</SelectItem>
                <SelectItem value="21:00">9:00 PM</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500 mt-2">
              Note: Emails are processed once daily via cron job.
            </p>
          </div>

          {/* Duration */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Duration
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDuration(1)}
                className="rounded-full"
              >
                1 Month
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDuration(2)}
                className="rounded-full"
              >
                2 Months
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDuration(3)}
                className="rounded-full"
              >
                3 Months
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDuration(6)}
                className="rounded-full"
              >
                6 Months
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Start Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !preferences.startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {preferences.startDate ? format(new Date(preferences.startDate), "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={preferences.startDate ? new Date(preferences.startDate) : undefined}
                      onSelect={(date) =>
                        setPreferences((prev) => ({
                          ...prev,
                          startDate: date ? date.toISOString().slice(0, 10) : "",
                        }))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">End Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !preferences.endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {preferences.endDate ? format(new Date(preferences.endDate), "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={preferences.endDate ? new Date(preferences.endDate) : undefined}
                      onSelect={(date) =>
                        setPreferences((prev) => ({
                          ...prev,
                          endDate: date ? date.toISOString().slice(0, 10) : "",
                        }))
                      }
                      disabled={(date) =>
                        preferences.startDate ? date < new Date(preferences.startDate) : false
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Active Toggle */}
          <div className="mb-8 flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <h3 className="font-semibold text-gray-900">Email Notifications</h3>
              <p className="text-sm text-gray-600">Receive DSA questions via email</p>
            </div>
            <Switch
              checked={preferences.isActive}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, isActive: checked }))
              }
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <CheckCircle2 className="w-4 h-4 mr-2" />
              )}
              Save Preferences
            </Button>
            <Button
              variant="outline"
              onClick={handleUnsubscribe}
              disabled={saving}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Unsubscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSASettings;
