import DashboardLayout from "@/components/layout/DashboardLayout";
// Import core chart components from recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Import shadcn/ui chart helper components
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
} from "@/components/ui/chart";

// Import icons (assuming lucide-react is installed)
import {
  ChevronRight,
  CreditCard,
  PencilLine,
  Banknote,
  Hourglass,
} from "lucide-react";

const Index = () => {
  // Dummy data for Monthly Issuance Chart (adjusted to match design proportions)
  const monthlyIssuanceData = [
    { month: "May", Personalized: 12, Instant: 40 },
    { month: "Jun", Personalized: 22, Instant: 50 },
    { month: "Jul", Personalized: 8, Instant: 25 },
    { month: "Aug", Personalized: 10, Instant: 48 },
    { month: "Sep", Personalized: 12, Instant: 38 },
    { month: "Oct", Personalized: 18, Instant: 64 },
    { month: "Nov", Personalized: 12, Instant: 62 },
  ];

  // Dummy data for This Week's Income Chart
  const weeklyIncomeData = [
    { day: "Mon", income: 45 },
    { day: "Tue", income: 30 },
    { day: "Wed", income: 55 },
    { day: "Thu", income: 40 },
    { day: "Fri", income: 65 },
    { day: "Sat", income: 70 },
    { day: "Sun", income: 80 },
  ];

  // Dummy data for Card Status Distribution Chart (using counts) - Total 2450
  const cardStatusData = [
    { status: "Active", count: 1200 },
    { status: "Expired", count: 500 },
    { status: "Inactive", count: 300 },
    { status: "Blocked", count: 250 },
    { status: "Lost", count: 200 },
  ];

  // Data for Recent Card Requests Table
  const recentCardRequests = [
    { branch: "Corporate", cardType: "Instant", quantity: 10, status: "Ready" },
    {
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "In Progress",
    },
    {
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "Acknowledged",
    },
    {
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Pending",
    },
  ];

  const COLORS = ["#00A3B0", "#FFCE56", "#0D47A1", "#9966FF", "#FF6384"]; // Colors for Pie Chart segments based on design

  // Chart configuration based on design - primarily for labels used by shadcn helpers
  const chartConfig = {
    Personalized: { label: "Personalized", color: "#0D47A1" }, // Darker blue from design
    Instant: { label: "Instant", color: "#90CAF9" }, // Lighter blue from design
    income: { label: "Income", color: "#4BC0C0" },
    Active: { label: "Active", color: COLORS[0] },
    Expired: { label: "Expired", color: COLORS[1] },
    Inactive: { label: "Inactive", color: COLORS[2] },
    Blocked: { label: "Blocked", color: COLORS[3] },
    Lost: { label: "Lost", color: COLORS[4] },
  };

  return (
    <DashboardLayout title="Dashboard">
      {/* Quick Access Section */}
      <div className="mb-5">
        <h5>Your Quick Access</h5>
        <div className="flex gap-3 flex-wrap">
          {/* Placeholder Quick Access Cards */}
          <div className="bg-blue-50 p-4 rounded-md flex flex-1 min-w-[200px] justify-between items-center shadow-sm">
            <span>Manage a Card</span>
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </div>
          <div className="bg-blue-50 p-4 rounded-md flex flex-1 min-w-[200px] justify-between items-center shadow-sm">
            <span>Issue Instant Card</span>
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </div>
          <div className="bg-blue-50 p-4 rounded-md flex flex-1 min-w-[200px] justify-between items-center shadow-sm">
            <span>Issue Personalized Card</span>
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </div>
          <div className="bg-blue-50 p-4 rounded-md flex flex-1 min-w-[200px] justify-between items-center shadow-sm">
            <span>Review Card Requests</span>
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="mb-5">
        <h5>Analytics</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Analytics Cards */}
          <div className="border border-gray-300 p-5 rounded-md flex flex-col">
            <div className="flex items-center mb-2">
              <CreditCard className="h-5 w-5 text-green-600 mr-2" />
              <h6 className="text-sm text-gray-600">Total Active Cards</h6>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold">26,478</p>
              <p className="text-green-600 text-xs">+9% this month</p>
            </div>
          </div>
          <div className="border border-gray-300 p-5 rounded-md flex flex-col">
            <div className="flex items-center mb-2">
              <PencilLine className="h-5 w-5 text-purple-600 mr-2" />
              <h6 className="text-sm text-gray-600">
                Total Personalized Cards
              </h6>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold">15,703</p>
              <p className="text-green-600 text-xs">+8.5% this month</p>
            </div>
          </div>
          <div className="border border-gray-300 p-5 rounded-md flex flex-col">
            <div className="flex items-center mb-2">
              <Banknote className="h-5 w-5 text-blue-600 mr-2" />
              <h6 className="text-sm text-gray-600">Today's Revenue</h6>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold">₦9.3M</p>
              <p className="text-gray-500 text-xs">+6% vs yesterday</p>
            </div>
          </div>
          <div className="border border-gray-300 p-5 rounded-md flex flex-col justify-between">
            <div className="flex items-center mb-2">
              <Hourglass className="h-5 w-5 text-orange-500 mr-2" />
              <h6 className="text-sm text-gray-600">Pending Requests</h6>
            </div>
            <p className="text-2xl font-bold">38</p>
            <p className="text-orange-500 text-xs">Requires attention</p>
          </div>
        </div>
      </div>

      {/* Monthly Issuance and Recent Card Requests Section (Side by Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <div className="border border-gray-300 p-5 rounded-md">
          <h5>Monthly Issuance</h5>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={monthlyIssuanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 80]} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend content={<ChartLegendContent />} />
              <Bar
                dataKey="Personalized"
                stackId="a"
                fill="var(--color-Personalized)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Instant"
                stackId="a"
                fill="var(--color-Instant)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="border border-gray-300 p-5 rounded-md">
          <h5>Recent Card Requests</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 font-semibold text-sm">Branch</th>
                  <th className="p-3 font-semibold text-sm">Card Type</th>
                  <th className="p-3 font-semibold text-sm">Quantity</th>
                  <th className="p-3 font-semibold text-sm">Status</th>
                  <th className="p-3 font-semibold text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentCardRequests.map((request, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="p-3 text-sm">{request.branch}</td>
                    <td className="p-3 text-sm">{request.cardType}</td>
                    <td className="p-3 text-sm">{request.quantity}</td>
                    <td className="p-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          request.status === "Ready"
                            ? "bg-green-100 text-green-800"
                            : request.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : request.status === "Acknowledged"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="p-3 text-sm">
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* This Week's Income and Card Status Distribution Section (Side by Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="border border-gray-300 p-5 rounded-md">
          <h5>This Week's Income</h5>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <LineChart accessibilityLayer data={weeklyIncomeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 100]} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="income"
                stroke="var(--color-income)"
                fillOpacity={0.2}
                fill="var(--color-income)"
              />
            </LineChart>
          </ChartContainer>
        </div>
        <div className="border border-gray-300 p-5 rounded-md">
          <h5>Card Status Distribution</h5>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Pie
                data={cardStatusData}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={100} // Adjust outer radius for thickness
                innerRadius={70} // Add inner radius for hollow center
                paddingAngle={4} // Adjust padding between segments
                cornerRadius={5} // Add rounded corners to segments
              >
                {cardStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent />} />
              <Legend
                content={<ChartLegendContent />}
                layout="horizontal" // Change layout to horizontal
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: "20px" }}
              />
              {/* Add text in the center for Total Cards */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <tspan x="50%" dy="-1em" className="text-sm text-gray-500">
                  Total Cards
                </tspan>
                <tspan x="50%" dy="1.5em" className="text-2xl font-bold">
                  2,450
                </tspan>
              </text>
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
