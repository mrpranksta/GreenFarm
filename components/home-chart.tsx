
"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", percentage: 40},
  { month: "February", percentage: 30 },
  { month: "March", percentage: 23 },
  { month: "April", percentage: 93 },
  { month: "May", percentage: 20 },
  { month: "June", percentage: 21 },
  { month: "July", percentage: 21 },
  { month: "August", percentage: 21 },
  { month: "September", percentage: 21 },
  { month: "October", percentage: 21 },
  { month: "November", percentage: 21 },
  { month: "December", percentage: 21 },
]
const chartConfig = {
  percentage: {
    label: "percentage",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function HumidityChart() {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Humility</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[360px] w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              dataKey="percentage"
              tickLine={true}
              tickMargin={10}
              domain={[0, 100]}
              axisLine={true}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="percentage" fill="#426653" radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
