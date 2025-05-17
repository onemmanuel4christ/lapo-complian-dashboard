import DashboardLayout from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, Pencil, Trash2 } from "lucide-react";

// Sample role data matching the image
const roles = [
  { id: 1, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
  { id: 2, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
  { id: 3, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
  { id: 4, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
  { id: 5, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
];

const Roles = () => {
  return (
    <DashboardLayout
      title="Roles"
      description="Manage your roles, create roles, view roles and edit roles. Select privileges and set account permissions here."
    >
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="relative w-full max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </span>
            <Input
              placeholder="Search role @olivia"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-2 shadow-none">
            + Create Role
          </Button>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell>{role.name}</TableCell>
                  <TableCell>{role.dateCreated}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-gray-100"
                    >
                      <Trash2 className="h-5 w-5 text-gray-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-gray-100"
                    >
                      <Pencil className="h-5 w-5 text-gray-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Roles;
