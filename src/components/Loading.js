import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'

TopBarProgress.config({
  barColors: {
    "0": "tomato",
    "0.5": "tomato",
    "1.0": "tomato",
  },
  shadowBlur: 10
})

const Loading = () => {
  return (
    <TopBarProgress />
  )
}

export default Loading
