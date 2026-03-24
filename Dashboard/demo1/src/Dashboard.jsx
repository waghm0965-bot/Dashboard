import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, CartesianGrid } from "recharts";
import { Gauge } from "@mui/x-charts/Gauge";

const StatCard = ({ title, value, color = "#111827" }) => (
  <Card sx={{ borderRadius: 2, boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
    <CardContent sx={{ p: 2 }}>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 600, marginTop: 6, color }}>{value}</div>
    </CardContent>
  </Card>
);

const agingData = [
  { name: "Current", ar: 2490000, ap: 1340000 },
  { name: "1-30", ar: 2030000, ap: 81160 },
  { name: "31-60", ar: 1000000, ap: 86640 },
  { name: "61-90", ar: 800000, ap: 79450 },
  { name: "91+", ar: 300000, ap: 46920 },
];

const workingCapital = [
  { m: "Jan", net: 7790, gross: 7790 },
  { m: "Feb", net: 18000, gross: 18000 },
  { m: "Mar", net: 136360, gross: 248700 },
  { m: "Apr", net: 226120, gross: 226120 },
  { m: "May", net: -107210, gross: 203360 },
  { m: "Jun", net: -18290, gross: 199560 },
  { m: "Jul", net: -31510, gross: 305790 },
  { m: "Aug", net: 476150, gross: 560980 },
  { m: "Sep", net: -63720, gross: 91070 },
  { m: "Oct", net: 300000, gross: 323380 },
  { m: "Nov", net: 188580, gross: 237240 },
  { m: "Dec", net: -48050, gross: 0 },
];

const plData = [
  { m: "Jan", sales: 500000, cogs: 450000, profit: 0 },
  { m: "Feb", sales: 700000, cogs: 650000, profit: 150000 },
  { m: "Mar", sales: 600000, cogs: 550000, profit: 140000 },
  { m: "Apr", sales: 800000, cogs: 750000, profit: 180000 },
  { m: "May", sales: 900000, cogs: 850000, profit: 200000 },
  { m: "Jun", sales: 900000, cogs: 880000, profit: 120000 },
  { m: "Jul", sales: 1000000, cogs: 980000, profit: 210000 },
  { m: "Aug", sales: 1100000, cogs: 1000000, profit: 220000 },
  { m: "Sep", sales: 1200000, cogs: 1100000, profit: 260000 },
  { m: "Oct", sales: 1300000, cogs: 1200000, profit: 280000 },
  { m: "Nov", sales: 1400000, cogs: 1300000, profit: 300000 },
  { m: "Dec", sales: 1500000, cogs: 1400000, profit: 320000 },
];

export default function FinancialDashboard() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 576;
  const gaugeW = isMobile ? 160 : 220;
  const gaugeH = isMobile ? 120 : 160;
  const chartH = isMobile ? 260 : 320;

  return (
    <div className="container-fluid py-3" style={{ background: "#f3f6fb", minHeight: "100vh" }}>
      <h5 className="fw-semibold mb-3">Financial Management</h5>

     
      <div className="row g-3">
        <div className="col-6 col-md-3">
          <StatCard title="Accounts Receivable" value="$6,621,280" color="#2563eb" />
        </div>
        <div className="col-6 col-md-3">
          <StatCard title="Accounts Payable" value="$1,630,270" color="#dc2626" />
        </div>
        <div className="col-6 col-md-3">
          <StatCard title="Equity Ratio" value="75.38 %" />
        </div>
        <div className="col-6 col-md-3">
          <StatCard title="Debt Equity" value="1.10 %" />
        </div>
      </div>

   
      <div className="row g-3 mt-1">
        {["Current Ratio", "DSI", "DSO", "DPO"].map((t, i) => (
          <div className="col-6 col-lg-3" key={i}>
            <Card sx={{ borderRadius: 2, boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
              <CardContent sx={{ p: 2 }}>
                <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 6 }}>{t}</div>
                <Gauge width={gaugeW} height={gaugeH} value={[18.6, 10, 7, 28][i]} valueMin={0} valueMax={31} />
              </CardContent>
            </Card>
          </div>
        ))}

        <div className="col-12 col-lg-6">
          <Card sx={{ borderRadius: 2, boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
            <CardContent sx={{ p: 2 }}>
              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 6 }}>AR & AP Aging</div>
              <div style={{ width: "100%", height: chartH }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={agingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ar" />
                    <Bar dataKey="ap" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    
      <div className="row g-3 mt-1">
        <div className="col-12 col-lg-6">
          <Card sx={{ borderRadius: 2, boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
            <CardContent sx={{ p: 2 }}>
              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 6 }}>Working Capital</div>
              <div style={{ width: "100%", height: chartH }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={workingCapital}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="m" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="net" />
                    <Line type="monotone" dataKey="gross" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-12 col-lg-6">
          <Card sx={{ borderRadius: 2, boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
            <CardContent sx={{ p: 2 }}>
              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 6 }}>Profit & Loss</div>
              <div style={{ width: "100%", height: chartH }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={plData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="m" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" />
                    <Bar dataKey="cogs" />
                    <Bar dataKey="profit" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}