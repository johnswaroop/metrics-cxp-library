"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const metrics = [
  { value: "responseTime", label: "Response Time" },
  { value: "satisfaction", label: "Customer Satisfaction Score" },
  { value: "firstContactResolution", label: "First Contact Resolution Rate" },
  { value: "averageHandlingTime", label: "Average Handling Time" },
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
    },
    xaxis: {
      categories: months,
    },
    yaxis: {
      title: {
        text: metrics.find((m) => m.value === metric)?.label,
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{title}</span>
          <Select value={metric} onValueChange={setMetric}>
            {metrics.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Chart options={options} series={series} type="line" height={300} />
      </CardContent>
    </Card>
  )
}

export default function CustomerServiceCharts() {
  const [metric1, setMetric1] = useState("responseTime")
  const [metric2, setMetric2] = useState("satisfaction")
  const [metric3, setMetric3] = useState("firstContactResolution")
  const [metric4, setMetric4] = useState("averageHandlingTime")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Service Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Chart 1" metric={metric1} setMetric={setMetric1} />
        <ChartCard title="Chart 2" metric={metric2} setMetric={setMetric2} />
        <ChartCard title="Chart 3" metric={metric3} setMetric={setMetric3} />
        <ChartCard title="Chart 4" metric={metric4} setMetric={setMetric4} />
      </div>
    </div>
  )
}

