import React from 'react'
import './single.css'
import MainSidebar from '../../components/sidebar/MainSidebar'
import SinglePost from '../../components/singlePost/SinglePost'

const Single = () => {
  return (
	<div className='single'>
		<SinglePost/>
		<MainSidebar/>
	</div>
  )
}

export default Single