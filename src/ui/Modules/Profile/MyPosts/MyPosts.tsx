import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './MyPosts.module.css' or its c... Remove this comment to see the full error message
import classes from './MyPosts.module.css'
// @ts-expect-error TS(6142): Module './Post/Post' was resolved to '/home/alexev... Remove this comment to see the full error message
import Post from "./Post/Post";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../common/validators/validators";
// @ts-expect-error TS(6142): Module '../../../common/widgets/FormControl/FormCo... Remove this comment to see the full error message
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <form onSubmit={props.handleSubmit}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field name={'newPostText'} component={Textarea} validate={[required, maxLength10]} placeholder={"Post message"}/>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={classes.postBlock}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h3>My posts:</h3>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <MyPostsReduxForm onSubmit={on_addPost}/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                {myPostItems}
            </div>
        </div>
    );
});

export default MyPosts;