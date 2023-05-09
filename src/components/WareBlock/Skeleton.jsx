import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader 
  className='ware-block'
    speed={2}
    width={280}
    height={420}
    viewBox='0 0 280 420'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='15' y='0' rx='20' ry='20' width='250' height='250' /> 
    <rect x='0' y='260' rx='5' ry='5' width='280' height='24' />  
    <rect x='7' y='309' rx='5' ry='5' width='265' height='35' /> 
    <rect x='8' y='389' rx='5' ry='5' width='65' height='25' /> 
    <rect x='142' y='377' rx='25' ry='25' width='130' height='45' />
  </ContentLoader>
)

export default Skeleton

