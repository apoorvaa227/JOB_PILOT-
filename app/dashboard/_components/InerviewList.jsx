"use client";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import InterviewItemCard from "./InterviewItemCard";

const InerviewList = () => {

  const { user } = useUser();
  const [interviewList, setInterviewList] = React.useState([]);

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    try {
      const res = await axios.get("/api/mock-interview");
      setInterviewList(res.data || []);
    } catch (error) {
      console.error("Error fetching mock interviews:", error);
    }
  };
  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {interviewList &&
          interviewList.map((interview, index) => (
            <InterviewItemCard interview={interview} key={index} />
          ))}
      </div>
    </div>
  )
}

export default InerviewList