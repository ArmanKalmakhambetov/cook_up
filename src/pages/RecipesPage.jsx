import React from 'react'
import { useState, useEffect } from "react";
import axiosInstance from "../services/axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ReceiptList from '../components/ReceiptList';

export default function RecipesPage() {
  const [receipts, setReceipts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(receipts)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/users");
        setReceipts(response.data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="container__center">
      <ReceiptList receipts={receipts} />
    </div>
  );
}
