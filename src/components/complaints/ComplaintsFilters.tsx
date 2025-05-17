import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Filter, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ComplaintsFiltersProps {
  onTabChange: (tab: string) => void;
  onSearch: (query: string) => void;
  onDateChange: (date: Date | undefined) => void;
  onLogComplaint?: () => void;
}

const ComplaintsFilters = ({
  onTabChange,
  onSearch,
  onDateChange,
  onLogComplaint,
}: ComplaintsFiltersProps) => {
  const [tab, setTab] = useState("pending");
  const [date, setDate] = useState<Date>();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onDateChange(selectedDate);
  };

  return (
    <div className="space-y-4">
      <Tabs
        value={tab}
        onValueChange={(val) => {
          setTab(val);
          onTabChange(val);
        }}
      >
        <TabsList>
          <TabsTrigger value="pending">
            {tab === "pending" && (
              <span className="w-2 h-2 rounded-full bg-[#014DAF] mr-2 inline-block"></span>
            )}
            Pending
          </TabsTrigger>
          <TabsTrigger value="resolved">
            {tab === "resolved" && (
              <span className="w-2 h-2 rounded-full bg-[#014DAF] mr-2 inline-block"></span>
            )}
            Resolved
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search complaint"
            className="pl-9"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>

          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>

          <Button onClick={onLogComplaint}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block text-[#014DAF]"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <path d="M13 2v7h7" />
            </svg>
            Log Complaint
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsFilters;
