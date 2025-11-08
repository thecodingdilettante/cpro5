"use client";

import React, { useEffect, useState } from "react";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";
import SearchBox from "./SearchBox";
import TicketList from "./TicketList";
import MyQueueSummary from "./MyQueueSummary";
import StatusMessage from "./StatusMessage";

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ status: "All", priority: "All" });
  const [search, setSearch] = useState("");
  const [queue, setQueue] = useState({});

// Fetch tickets
  useEffect(() => {
    async function fetchTickets() {
      try {
        const response = await fetch("/api/tickets");
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        setError(error.message);
        setStatus("error");
      }
    }
    fetchTickets();
  }, []);

// Visible tickets based on filters and search
  const visibleTickets = tickets.filter((ticket) => {
    const matchStatus = filters.status === "All" || ticket.status === filters.status;
    const matchPriority = filters.priority === "All" || ticket.priority === filters.priority;
    const matchSearch =
      ticket.title.toLowerCase().includes(search.toLowerCase()) ||
      ticket.description.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchPriority && matchSearch;
  });

// Add/remove queue tickets
  function onAdd(id) {
    setQueue((prev) => ({ ...prev, [id]: true }));
  }

  function removeFromQueue(id) {
    setQueue((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  }

  function clearQueue() {
    setQueue({});
  }

return (
  <div>
    <div>
      <StatusFilter value = {filters.status} onChange = {(val) => setFilters({ ...filters, status: val })}/>
      <PriorityFilter value = {filters.priority} onChange = {(val) => setFilters({ ...filters, priority: val })}/>
      <SearchBox value = {search} onChange = {setSearch} />
    </div>

    {visibleTickets.length === 0 ? (
      <StatusMessage type="empty"/>
    ) : (
      <TicketList tickets = {visibleTickets} onAddToQueue = {onAdd} queue = {queue}/>
    )}
    <MyQueueSummary tickets = {tickets.filter((ticket) => queue[ticket.id])} onRemove={removeFromQueue} onClear={clearQueue}/>
  </div>
)}