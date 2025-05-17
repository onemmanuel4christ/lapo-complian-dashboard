import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Complaint {
  accountNumber: string;
  customerName: string;
  submissionDate: string;
  category: string;
}

interface ComplaintsTableProps {
  complaints: Complaint[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ComplaintsTable = ({
  complaints,
  currentPage,
  totalPages,
  onPageChange,
}: ComplaintsTableProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="bg-white rounded-md shadow">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Account Number</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Submission Date</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complaints.map((complaint, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {complaint.accountNumber}
                </TableCell>
                <TableCell>{complaint.customerName}</TableCell>
                <TableCell>{complaint.submissionDate}</TableCell>
                <TableCell>{complaint.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} className="mr-1" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsTable;
