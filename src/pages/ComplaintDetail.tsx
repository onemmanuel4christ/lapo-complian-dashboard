import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import ComplaintsSectionHeader from "@/components/complaints/ComplaintsSectionHeader";

const mockComplaint = {
  category: "Card Dispute",
  branch: "Head Office",
  accountNumber: "0123456789",
  customerName: "Nazeer",
  details: "Complaint Details......",
  submissionDate: "11/14/2024 10:27:43",
  status: "Pending",
  resolvedBy: "-",
  attachment: "None",
  resolutionDate: "-",
};

const ComplaintDetail = () => {
  const { id } = useParams();
  // In a real app, fetch complaint by id
  const complaint = mockComplaint;

  return (
    <DashboardLayout
      title="Complaints: Resolve"
    >
        <ComplaintsSectionHeader
          title="Complaints: Resolve"
          description="View details of logged complaints and log new ones here."
        />
      <div className="mt-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 w-full">
          <h2 className="text-lg font-semibold mb-6 border-b pb-2">
            Complaint Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Complaint Category
              </label>
              <input
                value={complaint.category}
                readOnly
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Branch</label>
              <input
                value={complaint.branch}
                readOnly
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Account Number
              </label>
              <input
                value={complaint.accountNumber}
                readOnly
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Customer Name
              </label>
              <input
                value={complaint.customerName}
                readOnly
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-gray-700"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">
                Complaint Details
              </label>
              <textarea
                value={complaint.details}
                readOnly
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-gray-700 resize-none"
                rows={3}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Submission Date
              </label>
              <div className="text-gray-700 text-base">
                {complaint.submissionDate}
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Status</label>
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-50 text-yellow-800 border border-yellow-200 text-sm font-medium">
                Pending
              </span>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Resolved By
              </label>
              <div className="text-gray-700 text-base">
                {complaint.resolvedBy}
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Attachment
              </label>
              <div className="text-gray-700 text-base">
                {complaint.attachment}
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Resolution Date
              </label>
              <div className="text-gray-700 text-base">
                {complaint.resolutionDate}
              </div>
            </div>
          </div>
          <div className="pt-2">
            <Button
              style={{ background: "#014DAF", color: "white" }}
              className="px-10 py-2 text-base font-semibold rounded-md"
            >
              Resolve
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComplaintDetail;
