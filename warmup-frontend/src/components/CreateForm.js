import { useParams } from "react-router-dom";
import { Text } from '@chakra-ui/layout';
import { PostForm } from './Form';

export const CreateForm = () => {
    const {id} = useParams();
    return (
        <>
            <Text>Create</Text>
            <PostForm id={id}/>
        </>
    )
}