import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ComplaintsFilters from "@/components/complaints/ComplaintsFilters";
import ComplaintsTable from "@/components/complaints/ComplaintsTable";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import ComplaintsSectionHeader from "@/components/complaints/ComplaintsSectionHeader";

// Sample data
const sampleComplaints = Array(45)
  .fill(null)
  .map(() => ({
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "11/14/2024 10:27:43",
    category: "Card Dispute",
  }));

const ComplaintsLog = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [showLogModal, setShowLogModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

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
    >
      <div className="space-y-6">
        <ComplaintsSectionHeader
          title="Complaints: Log"
          description="View details of logged complaints and log new ones here."
        />
        <ComplaintsFilters
          onTabChange={setActiveTab}
          onSearch={handleSearch}
          onDateChange={setSelectedDate}
          onLogComplaint={() => setShowLogModal(true)}
        />
        <ComplaintsTable
          complaints={paginatedComplaints}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <Dialog open={showLogModal} onOpenChange={setShowLogModal}>
          <DialogContent className="max-w-md w-full p-0 rounded-xl overflow-hidden">
            <form className="bg-white p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-full"
                    style={{ background: "#E6F0FA" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#014DAF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M8 9h8M8 13h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Log Complaint</div>
                    <div className="text-xs text-gray-500">
                      Select category and fill in detailsy
                    </div>
                  </div>
                </div>
              </div>
              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Category
                  </label>
                  <select className="w-full border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#014DAF]">
                    <option value="">Select category from dropdown</option>
                    <option value="Card Dispute">Card Dispute</option>
                    <option value="Card Not Received">Card Not Received</option>
                    <option value="Fraud">Fraud</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Account Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#014DAF]"
                    placeholder="0123456789"
                    defaultValue="0123456789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Customer Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#014DAF]"
                    placeholder="Nazeer Ajibola"
                    defaultValue="Nazeer Ajibola"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Complaint Details<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#014DAF] resize-none"
                    rows={3}
                    placeholder="Describe complaint..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Upload File{" "}
                    <span className="text-gray-400">(optional)</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-md p-4 flex flex-col items-center justify-center text-center bg-gray-50">
                    <svg
                      width="32"
                      height="32"
                      fill="none"
                      stroke="#014DAF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2"
                    >
                      <path d="M16 16v6M16 16l-3-3m3 3l3-3M12 19h8" />
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                    <span
                      className="font-medium cursor-pointer"
                      style={{ color: "#014DAF" }}
                    >
                      Click to upload
                    </span>{" "}
                    <span className="text-gray-400">or drag and drop</span>
                    <div className="text-xs text-gray-400 mt-1">
                      PDF, JPG (max. 10mb)
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full"
                style={{
                  background: "#014DAF",
                  color: "white",
                  fontWeight: 600,
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  padding: "0.5rem 0",
                }}
              >
                Proceed
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default ComplaintsLog;
