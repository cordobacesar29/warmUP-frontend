import { useParams } from "react-router-dom";
import { Text } from '@chakra-ui/layout';
import { PostForm } from './Form';

export const EditForm = () => {
    const {id} = useParams();
    return (
        <>
            <Text>Edit</Text>
            <PostForm id={id}/>
        </>
    )
}