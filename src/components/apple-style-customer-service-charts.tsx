"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const metrics = [
  { value: "responseTime", label: "Response Time" },
  { value: "satisfaction", label: "Satisfaction" },
  { value: "firstContactResolution", label: "First Contact" },
  { value: "averageHandlingTime", label: "Avg. Handling" },
]

const mockData = {
  responseTime: [15, 12, 18, 14, 10, 13],
  satisfaction: [4.2, 4.5, 4.3, 4.6, 4.7, 4.4],
  firstContactResolution: [75, 78, 72, 80, 82, 79],
  averageHandlingTime: [8, 7, 9, 6, 7, 8],
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

const ChartCard = ({ title, metric, setMetric }) => {
  const options = {
    chart: {
      id: title,
      toolbar: { show: false },
      fontFamily: "Inter, sans-serif",
    },
    colors: ["#007AFF"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: months,
      labels: {
        style: {
          colors: "#8E8E93",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: metrics.find((m) => m.value === metric)?.label,
        style: {
          color: "#8E8E93",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      labels: {
        style: {
          colors: "#8E8E93",
          fontSize: "12px",
        },
      },
    },
    grid: {
      borderColor: "#E2E2E7",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "light",
      style: {
        fontSize: "12px",
      },
    },
  }

  const series = [
    {
      name: metrics.find((m) => m.value === metric)?.label,
      data: mockData[metric],
    },
  ]

  return (
    <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="flex space-x-2 mb-4">
        {metrics.map((m) => (
          <button
            key={m.value}
            onClick={() => setMetric(m.value)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              metric === m.value ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  )
}

export default function AppleStyleCustomerServiceCharts() {
  const [metric1, setMetric1] = useState("responseTime")
  const [metric2, setMetric2] = useState("satisfaction")
  const [metric3, setMetric3] = useState("firstContactResolution")
  const [metric4, setMetric4] = useState("averageHandlingTime")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Customer Service Metrics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChartCard title="Response Metrics" metric={metric1} setMetric={setMetric1} />
          <ChartCard title="Satisfaction Scores" metric={metric2} setMetric={setMetric2} />
          <ChartCard title="Resolution Rates" metric={metric3} setMetric={setMetric3} />
          <ChartCard title="Handling Times" metric={metric4} setMetric={setMetric4} />
        </div>
      </div>
    </div>
  )
}

