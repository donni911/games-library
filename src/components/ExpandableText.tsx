import { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'

interface Props {
    children: string
    maxChars: number
}
const ExpandableText = ({ children, maxChars }: Props) => {

    const [isMore, setIsMore] = useState(false);
    const croppedText = isMore ? children : children.substring(0, maxChars);
    const buttonCaption = isMore ? 'Show less' : 'Show more'

    return (
        <Text>
            {isMore ? croppedText : croppedText + '...'}
            <Button ml={2} onClick={() => setIsMore(!isMore)} colorScheme='yellow' size='xs'>{buttonCaption}</Button>
        </Text>
    )
}

export default ExpandableText
