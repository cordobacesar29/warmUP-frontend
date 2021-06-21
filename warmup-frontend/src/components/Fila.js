import React from "react";
import { useHistory } from "react-router-dom";
import { Tr, Td } from "@chakra-ui/table";
import { Button } from '@chakra-ui/react';
import { usePosts } from '../hooks/apiHook'

export const Fila = () => {

    let history = useHistory();
    const {deleteOnePost, posts} = usePosts();

    const handleDelete = postId => {
    deleteOnePost(postId);
    };

    return(
        posts.map((post)=>(
            <Tr key={post.id}>
                <Td>{post.id}</Td>
                <Td>{post.title}</Td>
                <Td><Button 
                        colorScheme="yellow" 
                        size="xs"
                        onClick={()=>{
                            history.push(`/detail/${post.id}`);
                        }}
                    >
                    Detail
                    </Button>
                </Td>
                <Td><Button 
                        colorScheme="teal" 
                        size="xs"
                        onClick={()=>{
                            history.push(`/editForm/${post.id}`);
                        }}
                    >
                    Edit
                    </Button>
                </Td>
                <Td><Button 
                        colorScheme="red" 
                        size="xs"
                        onClick={()=>{
                            handleDelete(post.id);
                        }}
                    >
                    Delete
                    </Button>
                </Td>
            </Tr>
        ))
    );
};