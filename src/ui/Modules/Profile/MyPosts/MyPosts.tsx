import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './MyPosts.module.css' or its c... Remove this comment to see the full error message
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../common/validators/validators";
import {Textarea} from "../../../common/widgets/FormControl/FormControl";

const maxLength10 = maxLengthCreator(10);

/**
 * @details Для оптимизации можно использовать memo, PureComponent или переопределить shouldComponentDidUpdate
 * @param props
 * @returns {*}
 * @constructor
 */

const MyPostsForm  = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            
            <div>
                
                <Field name={'newPostText'} component={Textarea} validate={[required, maxLength10]} placeholder={"Post message"}/>
            </div>
            
            <div>
                
                <button>Add post</button>
            </div>
        </form>
    )
};

const MyPostsReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(MyPostsForm);

const MyPosts = React.memo((props) => {

    let myPostItems =
        // @ts-expect-error TS(2339): Property 'myPostsData' does not exist on type 'obj... Remove this comment to see the full error message
        [...props.myPostsData.myPostStateItems].reverse().map(post => <Post text={post.text} likeCount={post.likeCount} id={post.id} key={post.id}/>);

    let on_addPost = (formData: any) => {
        // @ts-expect-error TS(2339): Property 'addPost' does not exist on type 'object'... Remove this comment to see the full error message
        props.addPost(formData.newPostText);
    };

    return (
        <div className={classes.postBlock}>
            
            <h3>My posts:</h3>
            
            <MyPostsReduxForm onSubmit={on_addPost}/>
            
            <div>
                {myPostItems}
            </div>
        </div>
    );
});

export default MyPosts;