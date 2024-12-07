import LevelSelect from './LevelSelect'
import Intro from './Intro'
import End from './End'
import LevelTitle from './LevelTitle'
import IconsTop from './IconsTop'
import Footer from './Footer'

function UI() {
  return (
    <div id="ui">
      <LevelSelect />
      <Intro />
      <End />
      <LevelTitle />
      <IconsTop />
      <Footer />
    </div>
  )
}

export default UI
