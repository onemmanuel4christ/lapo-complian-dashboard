import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample users data
const initialUsers = [
  {
    id: 1,
    name: "Adebayo Johnson",
    email: "adebayo.j@lapo.com",
    role: "Branch Manager",
    branch: "Lagos Main Branch",
    status: "Active",
  },
  {
    id: 2,
    name: "Ngozi Okafor",
    email: "ngozi.o@lapo.com",
    role: "Branch Manager",
    branch: "Abuja Central",
    status: "Active",
  },
  {
    id: 3,
    name: "Emmanuel Okonkwo",
    email: "emmanuel.o@lapo.com",
    role: "Branch Manager",
    branch: "Port Harcourt Office",
    status: "Active",
  },
  {
    id: 4,
    name: "Fatima Yusuf",
    email: "fatima.y@lapo.com",
    role: "Card Officer",
    branch: "Kano Branch",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Oluwaseun Ade",
    email: "oluwaseun.a@lapo.com",
    role: "Customer Service",
    branch: "Ibadan Branch",
    status: "Active",
  },
  {
    id: 6,
    name: "Chioma Nwosu",
    email: "chioma.n@lapo.com",
    role: "Administrator",
    branch: "Head Office",
    status: "Active",
  },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.branch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <DashboardLayout title="Users" description="Manage system users">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="max-w-sm">
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full"
            />
          </div>
          <Button>Add New User</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableCaption>A list of all system users</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.branch}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Reset Password
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No users found matching your search
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Users;
