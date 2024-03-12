import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button } from '@nutui/nutui-react-taro';
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
       <Button >
        分享
      </Button>
      <Button>点击</Button>
      <Button>1</Button>
      <Text>Hello world!</Text>
    </View>
  )
}
