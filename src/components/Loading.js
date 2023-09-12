import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'

TopBarProgress.config({
  barColors: {
    "0": "#7f71ff", // Periwinkle
    "0.5": "#7f71ff",
    "1.0": "#7f71ff",
  },
  shadowBlur: 10
})

const Loading = () => {
  return (
    <TopBarProgress />
  )
}

export default Loading
