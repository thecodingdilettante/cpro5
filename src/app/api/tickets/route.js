export async function GET() {
  const tickets = [
{
  "id": "t-1022",
  "title": "Cannot connect to VPN",
  "description": "User reports intermittent VPN connectivity errors.",
  "priority": "Medium",        // Low | Medium | High | Critical
  "status": "Open",          // Open | In Progress | On Hold | Resolved
  "assignee": "John Smith",  // string
  "updatedAt": "2025-10-31T14:05:00Z"
},
{
  "id": "t-1023",
  "title": "WiFi Won't Connect",
  "description": "User reports WiFi connectivity errors.",
  "priority": "High",        // Low | Medium | High | Critical
  "status": "Resolved",          // Open | In Progress | On Hold | Resolved
  "assignee": "Iman Jean Pierre",  // string
  "updatedAt": "2025-10-31T14:08:00Z"
},
{
  "id": "t-1024",
  "title": "Update Distribution List",
  "description": "User requires update to distro list.",
  "priority": "Low",        // Low | Medium | High | Critical
  "status": "Open",          // Open | In Progress | On Hold | Resolved
  "assignee": "Unassigned",  // string
  "updatedAt": "2025-10-31T14:10:30Z"
},
{
  "id": "t-1025",
  "title": "Cannot connect to VPN",
  "description": "User reports intermittent VPN connectivity errors.",
  "priority": "High",        // Low | Medium | High | Critical
  "status": "In Progress",          // Open | In Progress | On Hold | Resolved
  "assignee": "John Smith",  // string
  "updatedAt": "2025-10-30T14:05:00Z"
},
{
  "id": "t-1026",
  "title": "Password reset",
  "description": "User requests password reset to program; locked out.",
  "priority": "High",        // Low | Medium | High | Critical
  "status": "Resolved",          // Open | In Progress | On Hold | Resolved
  "assignee": "Bennett Harold",  // string
  "updatedAt": "2025-10-28T14:12:00Z"
},
{
  "id": "t-1027",
  "title": "Camera not working",
  "description": "User reports computer camera inoperational.",
  "priority": "Low",        // Low | Medium | High | Critical
  "status": "Open",          // Open | In Progress | On Hold | Resolved
  "assignee": "John Smith",  // string
  "updatedAt": "2025-10-31T14:14:00Z"
},
{
  "id": "t-1028",
  "title": "Program Update Failure",
  "description": "User reports program will not update.",
  "priority": "High",        // Low | Medium | High | Critical
  "status": "Open",          // Open | In Progress | On Hold | Resolved
  "assignee": "Iman Jean Pierre",  // string
  "updatedAt": "2025-10-31T14:05:00Z"
},
{
  "id": "t-1029",
  "title": "Monitor not detected",
  "description": "User reports new monitor is not detected with dual screens.",
  "priority": "Low",        // Low | Medium | High | Critical
  "status": "On Hold",          // Open | In Progress | On Hold | Resolved
  "assignee": "Bennett Harold",  // string
  "updatedAt": "2025-10-31T14:12:00Z"
},
{
  "id": "t-1030",
  "title": "Cannot connect to VPN",
  "description": "User reports intermittent VPN connectivity errors.",
  "priority": "High",        // Low | Medium | High | Critical
  "status": "Resolved",          // Open | In Progress | On Hold | Resolved
  "assignee": "Iman Jean Pierre",  // string
  "updatedAt": "2025-10-30T14:05:00Z"
},
{
  "id": "t-1031",
  "title": "Password Reset",
  "description": "User requests password reset to program; locked out.",
  "priority": "Low",        // Low | Medium | High | Critical
  "status": "Resolved",          // Open | In Progress | On Hold | Resolved
  "assignee": "John Smith",  // string
  "updatedAt": "2025-10-31T14:05:00Z"
},
{
  "id": "t-1032",
  "title": "Update Distribution List",
  "description": "User requires update to distro list.",
  "priority": "Low",        // Low | Medium | High | Critical
  "status": "Resolved",          // Open | In Progress | On Hold | Resolved
  "assignee": "Iman Jean Pierre",  // string
  "updatedAt": "2025-10-25T14:15:00Z"
},
{
  "id": "t-1033",
  "title": "Cannot connect to VPN",
  "description": "User reports intermittent VPN connectivity errors.",
  "priority": "High",        // Low | Medium | High | Critical
  "status": "In Progress",          // Open | In Progress | On Hold | Resolved
  "assignee": "Bennett Harold",  // string
  "updatedAt": "2025-10-25T14:05:00Z"
}
];
  return Response.json(tickets);
}