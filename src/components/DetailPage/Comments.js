import React from 'react';
import {MDBRow,MDBCol,MDBBtn,MDBContainer} from 'mdbreact';
import {ApiBase} from './../../Service/api';
import { connect } from 'react-redux';
import {Action} from './../../actions';
import {Comment} from './Comment';
import {User} from './User';

class Comments extends React.Component
{
    constructor(props)
    {
        super(props);
        this.SubmitComment = this.SubmitComment.bind(this);
    }

    componentWillMount()
    {
        this.props.ShowComment(this.props.ID);
    }

    SubmitComment(e)
    {

        if(e.which == 13)
        {
            //console.log(localStorage.getItem("UserID"));
            if(localStorage.getItem("UserID")==undefined&&localStorage.getItem("UserID")==null)
            {
                this.props.ShowSignIn(true);
                return;
            }
            if(localStorage.getItem("FoodID") == undefined)
            {
                window.location.reload();
                return;
            }
            if(this.Data.value == null || this.Data.value == undefined || this.Data.value=="" )
            {
                alert("Vui long nhap noi dung");
                return;
            }
            this.props.SendComment({UserID:localStorage.getItem("UserID"),
            FoodID:localStorage.getItem("FoodID"),Content:this.Data.value});
            this.Data.value = '';
            this.Data.blur();
            window.location.reload();
        }
    }
    render()
    {
        if(this.props.Comments.comment === undefined || 
            this.props.Comments.comment=='undefined'||
            this.props.Comments.comment == '')
        {
            return(
                <MDBContainer>
                    <MDBRow>
                        <textarea className="comments_field shadow p-3 mb-5 bg-white rounded" 
                        placeholder="Comments ......"
                        ref = {(ref)=>{this.Data=ref}}
                        onKeyPress={this.SubmitComment}>
                        </textarea>
                    </MDBRow>
                </MDBContainer>   
            );
        }
        console.log(typeof(this.props.Comments.comment));
        const ShowedComment = this.props.Comments.comment.slice(0,10).reverse();
        const ShowCommentComponent = ShowedComment.map((item,index)=>{return(
            <MDBRow
            className="ShowedComment"
            key={index}
            >
                 <User
                    Name = {item.UserID.Name}
                    Image = {item.UserID.Image}
                />
                <Comment
                Content = {item.Content}
                />
            </MDBRow>
        )});

        return(
            <MDBContainer>
                <MDBRow>
                    <textarea className="comments_field shadow p-3 mb-5 bg-white rounded" 
                    placeholder="Comments ......"
                    ref = {(ref)=>{this.Data=ref}}
                    onKeyPress={this.SubmitComment}>
                    </textarea>
                </MDBRow>
                {ShowCommentComponent}
                <MDBRow>
                    <MDBCol sm="5">
                    </MDBCol>
                    <MDBCol sm="2">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </MDBCol>
                    <MDBCol sm="5">
                    </MDBCol>
                </MDBRow>
            </MDBContainer>   
        )
    }
}

const mapStateToProps = (state)=>({
    Comments:state.GetComment
});

const mapDispatchToProps = (dispatch)=>({
    SendComment:(payload)=>dispatch(ApiBase.PostApiObject.AddComment(payload)),
    ShowSignIn:(payload) => dispatch(Action.ToggleSignIn(payload)),
    ShowComment:(payload) => dispatch(ApiBase.GetApiObject.GetCommentDetail(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);