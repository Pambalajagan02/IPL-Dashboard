import {PieChart, Pie, Tooltip} from 'recharts'

const PiechartOf = props => {
  const {recentMatches} = props
  console.log(recentMatches)
  const matchData = recentMatches.map(each => ({matchstatus: each.matchStatus}))

  const statusCounts = matchData.reduce((acc, item) => {
    acc[item.matchstatus] = (acc[item.matchstatus] || 0) + 1
    return acc
  }, {})

  const data = Object.keys(statusCounts).map(status => ({
    name: status,
    value: statusCounts[status],
  }))
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
      <Tooltip />
    </PieChart>
  )
}
export default PiechartOf
