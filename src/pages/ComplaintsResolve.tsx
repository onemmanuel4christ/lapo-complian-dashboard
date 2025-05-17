import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Filter, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ComplaintsSectionHeader from "@/components/complaints/ComplaintsSectionHeader";

const sampleComplaints = Array(300)
  .fill(null)
  .map((_, i) => ({
    id: `CMP-${1000 + i}`,
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "11/14/2024 10:27:43",
    category: "Card Dispute",
  }));

const ComplaintsResolve = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const navigate = useNavigate();

  // Filter complaints by search query
  const filteredComplaints = sampleComplaints.filter((complaint) => {
    const q = searchQuery.toLowerCase();
    return (
      complaint.accountNumber.toLowerCase().includes(q) ||
      complaint.customerName.toLowerCase().includes(q) ||
      complaint.category.toLowerCase().includes(q)
    );
  });

  // Pagination logic
  const totalPages = Math.max(
    1,
    Math.ceil(filteredComplaints.length / pageSize)
  );
  const paginatedComplaints = filteredComplaints.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Reset to page 1 on new search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <DashboardLayout
      title="Complaints: Log"
      description="View details of logged complaints and log new ones here."
    >
      <div className="space-y-6">
        <ComplaintsSectionHeader
          title="Complaints: Resolve"
          description="View details of logged complaints and log new ones here."
        />
        {/* Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className=""
          >
            <TabsList className="bg-white border rounded-lg p-1 flex gap-0">
              <TabsTrigger
                value="pending"
                className={`px-6 py-2 rounded-lg font-medium flex items-center transition-colors ${
                  activeTab === "pending"
                    ? "bg-[#F5F8FA] text-[#014DAF] border border-[#014DAF]"
                    : "bg-white text-gray-700"
                }`}
              >
                {activeTab === "pending" && (
                  <span className="w-2 h-2 rounded-full bg-[#014DAF] mr-2 inline-block"></span>
                )}
                Pending
              </TabsTrigger>
              <TabsTrigger
                value="resolved"
                className={`px-6 py-2 rounded-lg font-medium flex items-center transition-colors ${
                  activeTab === "resolved"
                    ? "bg-[#F5F8FA] text-[#014DAF] border border-[#014DAF]"
                    : "bg-white text-gray-700"
                }`}
              >
                {activeTab === "resolved" && (
                  <span className="w-2 h-2 rounded-full bg-[#014DAF] mr-2 inline-block"></span>
                )}
                Resolved
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button
            style={{ background: "#014DAF", color: "white" }}
            className="font-medium rounded-lg px-6 py-2 shadow-none flex items-center gap-2"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M8 9h8M8 13h6" />
            </svg>{" "}
            Log Complaint
          </Button>
        </div>
        {/* Search and Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search complaint"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#014DAF]"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-200"
            >
              <Calendar className="h-4 w-4" /> Date
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-200"
            >
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
        </div>
        {/* Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submission Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {paginatedComplaints.map((complaint, idx) => (
                <tr
                  key={complaint.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    navigate(`/complaints-resolve/${complaint.id}`)
                  }
                >
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">
                    {complaint.accountNumber}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">
                    {complaint.customerName}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">
                    {complaint.submissionDate}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">
                    {complaint.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-white rounded-b-md">
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-md"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-md"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComplaintsResolve;
