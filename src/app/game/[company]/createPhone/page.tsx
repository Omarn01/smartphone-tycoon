import './page.sass'

import Sidebar from '@/components/CreatePhone/sidebar/Sidebar'
import Size from '@/components/CreatePhone/size/Size'
import Color from '@/components/CreatePhone/color/Color'
import MainCamera from '@/components/CreatePhone/mainCamera/MainCamera'
import Display from '@/components/CreatePhone/display/Display'
import Processor from '@/components/CreatePhone/processor/Processor'

export default function Page() {
  return (
    <div className='createPhone'>
      <Sidebar />
      <Size />
      <Color />
      <MainCamera />
      <Display />
      <Processor />
    </div>
  )
}
