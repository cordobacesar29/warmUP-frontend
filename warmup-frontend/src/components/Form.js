/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Heading, FormControl, Flex, Textarea, Text, FormLabel, Input, Form  } from '@chakra-ui/react';

import { usePosts } from '../hooks/apiHook';

export const PostForm = () => {
    
  const { id } = useParams();
  const { addNewPost, posts, updateOnePost } = usePosts();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleError, setTitleError] = useState('');
  const [bodyError, setBodyError] = useState('');

  const history = useHistory();

  const postToEdit = id ? posts.find(p => p.id === Number(id)) : null;
  console.log(postToEdit);
  useEffect(() => {
      if (postToEdit) {
      setTitle(postToEdit.title);
      setBody(postToEdit.body);
    }
  }, [postToEdit]);

  const handleSubmit = e => {
    e.preventDefault();

    !body ? setBodyError('Post content must not be empty') : setBodyError('');
    !title ? setTitleError('Post title must not be empty') : setTitleError('');

    if (body && title) {
      id ? updateOnePost(id, { body, title }) : addNewPost({ body, title });
      setTitle('');
      setBody('');
      history.push('/');
    }
  };

  const handleTitleChange = e => setTitle(e.target.value);
  const handleBodyChange = e => setBody(e.target.value);

  return (
    <>
        <Flex justify='center' align='center' direction='column' w='100%' h='100vh'>
            <Heading m='2rem'>{postToEdit ? 'Update post' : 'Create post'}</Heading>
            <Form onSubmit={handleSubmit}>
                <FormControl id="first-name" isRequired w='40vh' align='center' h='60vh' mb='2rem' border=' 2px solid #c2c2c2' borderRadius='8px' p='2rem'>
                    <FormLabel mb='2rem'><Text>Title</Text></FormLabel>
                    <Input placeholder="Title" mb='2rem' name='title' onChange={handleTitleChange} type='text' value={postToEdit.title}/>
                    {bodyError && (
                    <Text size='xs'>{bodyError}</Text>
                    )}
                    <FormLabel mb='2rem'><Text>Content</Text></FormLabel>
                    <Textarea placeholder="Content" size="lg" mb='2rem' name='content' onChange={handleBodyChange} type='textarea' value={postToEdit.body}/>
                    {titleError && (
                    <Text size='xs'>{titleError}</Text>
                    )}
                    <Button m='2rem'>{postToEdit ? 'Update' : 'Create'}</Button>
                    <Button m='2rem'>Cancel</Button>
                </FormControl>
            </Form>
        </Flex>
    </>
  );
}

