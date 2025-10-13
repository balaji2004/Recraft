'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', diverted: 1.2 },
  { month: 'February', diverted: 1.5 },
  { month: 'March', diverted: 1.4 },
  { month: 'April', diverted: 1.8 },
  { month: 'May', diverted: 2.1 },
  { month: 'June', diverted: 2.5 },
];

const chartConfig = {
  diverted: {
    label: 'Waste Diverted (tons)',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function ImpactChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis 
          tickFormatter={(value) => `${value}t`}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="diverted" fill="var(--color-diverted)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
