import { useEffect, useState } from "react";
import {
  getChatByID,
  getUserChats,
  newMessageChat,
} from "../../services/chats.service";
import { Loading } from "../../components";
import { useAuth } from "../../context/authContext";

import { useForm } from "react-hook-form";
import { ChatElement } from "./Chat.element";
import { ChatColumnElement } from "./ChatColumn.element";
import {
  ButtonPrimary,
  FlexAround,
  FlexDir,
  FlexEnd,
} from "../../components/StyleComponents";
import { ChatContainerElement } from "./ChatContainer.element";
import { ChatDetailElement } from "./ChatDetail.element";
import { MessageChatElement } from "./MessageChat.element";
import { FindUsers } from "../../components/FindUsers/FindUsers";
import { getUserByName } from "../../services/user.service";
import {
  scrollToBottom,
  scrollToBottomAnimated,
} from "../../utils/scrollReact";
import { Link, useNavigate } from "react-router-dom";

export const Chat = () => {
  //parte de chats activos
  //mappeo res usuario
  //cuando se manda un mensaje tambien hay que re-renderizar esta parte (refetch)
  //
  const [isMobile, setIsMobile] = useState(window.innerWidth < 776);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [res, setRes] = useState({});
  const [resMessage, setResMessage] = useState({});
  const [activeChat, setActiveChat] = useState("");
  const [sentComment, setSentComment] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [inputValue, setInputValue] = useState("");

  const fetchres = async () => {
    const response = await getUserChats();
    setRes(response);

    setIsLoading(false);
  };

  const newMessage = async (formData) => {
    let customFormData = {
      textComment: formData.textComment,
      otherUser:
        activeChat?.userOne?._id == user._id
          ? activeChat?.userTwo._id
          : activeChat?.userOne?._id,
    };

    const response = await newMessageChat(customFormData);
    if (response.status == 200) {
      // console.log("entroooooo", sentComment);
      setActiveChat("");
      setSentComment(!sentComment);
      setTextArea("");
      setInputValue("");
      setActiveChat(response.data.chat);
    }
  };

  useEffect(() => {
    fetchres();
  }, [sentComment]);

  useEffect(() => {
    activeChat != "" && scrollToBottom("scroll");
  }, [activeChat]);

  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDateFunction = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const totalDate = `${day}/${month + 1}`;
    return totalDate;
  };

  const actualDate = new Date();

  const getHourFunction = (date) => {
    const newDate = new Date(date);
    const hours = newDate.getHours();
    const minute = newDate.getMinutes();
    const totalTime = `${hours}:${minute}`;
    return totalTime;
  };

  return (
    <>
      <ChatElement>
        {!isMobile && (
          <>
            <ChatContainerElement variant={"multiple"}>
              <h2>Active Chats</h2>
              <ChatColumnElement>
                {isLoading && <Loading />}
                {!isLoading &&
                  res &&
                  res?.data?.chats?.map((chat) => (
                    <>
                      {/* {console.log(chat)} */}
                      <div className="line"></div>

                      <ChatDetailElement
                        key={chat}
                        variant={activeChat?._id == chat?._id && "active"}
                        onClick={(e) => {
                          setActiveChat(chat);
                        }}
                      >
                        <img
                          alt="chat user logo"
                          src={
                            chat?.userOne?._id == user?._id
                              ? chat?.userTwo?.image
                              : chat?.userOne?.image
                          }
                        />

                        <FlexDir direction={"column"} width={"75%"}>
                          <FlexAround>
                            <h1>
                              {chat?.userOne?._id == user?._id
                                ? chat?.userTwo?.username
                                : chat?.userOne?.username}
                            </h1>
                            {getDateFunction(actualDate) ==
                            getDateFunction(
                              chat.comments[chat.comments.length - 1].createdAt
                            ) ? (
                              <p>
                                {getHourFunction(
                                  chat.comments[chat.comments.length - 1]
                                    .createdAt
                                )}
                              </p>
                            ) : (
                              <p>
                                {" "}
                                {getDateFunction(
                                  chat.comments[chat.comments.length - 1]
                                    .createdAt
                                )}{" "}
                              </p>
                            )}
                            {/* <p> {getDateFunction(chat.comments[chat.comments.length - 1].createdAt)} </p>    */}
                            {/* <p>{getHourFunction(chat.comments[chat.comments.length - 1].createdAt)}</p> */}
                          </FlexAround>
                          <FlexAround>
                            <p>
                              {" "}
                              {
                                chat?.comments[chat?.comments?.length - 1]
                                  ?.textComment
                              }{" "}
                            </p>
                          </FlexAround>
                        </FlexDir>
                      </ChatDetailElement>
                    </>
                  ))}
                <div className="line"></div>
              </ChatColumnElement>
            </ChatContainerElement>

            <ChatContainerElement variant={"individual"}>
              {activeChat != "" && (
                <>
                  {/* <Link to={activeChat?.userOne._id == user._id
                          ? `user/${activeChat?.userTwo?.username}` :`user/${activeChat?.userOne?.username}` }> */}
                  <FlexDir
                    justifyContent={"flex-start"}
                    width={"90%"}
                    margin={"12px 0 0 0"}
                    onClick={() =>
                      navigate(
                        activeChat?.userOne._id == user._id
                          ? `/user/${activeChat?.userTwo?.username}`
                          : `/user/${activeChat?.userOne?.username}`
                      )
                    }
                  >
                    <img
                      alt="user logo "
                      src={
                        activeChat?.userOne._id == user._id
                          ? activeChat?.userTwo.image
                            ? activeChat?.userTwo?.image
                            : activeChat?.userTwo.image
                          : activeChat?.userOne.image
                          ? activeChat?.userOne?.image
                          : activeChat?.userOne.image
                      }
                    />

                    <h1>
                      {activeChat?.userOne._id == user._id
                        ? activeChat?.userTwo.name
                          ? activeChat?.userTwo?.name
                          : activeChat?.userTwo.username
                        : activeChat?.userOne.name
                        ? activeChat?.userOne?.name
                        : activeChat?.userOne.username}
                    </h1>
                  </FlexDir>
                  {/* </Link> */}
                  <div className="line"></div>
                  <ChatColumnElement display={"flex"} id="scroll">
                    {activeChat.comments.map((comment) => (
                      <>
                        <MessageChatElement
                          variant={
                            comment?.creator?._id == user._id
                              ? "own"
                              : "otherUser"
                          }
                        >
                          <p>{comment?.textComment}</p>
                          {getDateFunction(actualDate) ==
                          getDateFunction(comment.createdAt) ? (
                            <p>{getHourFunction(comment.createdAt)}</p>
                          ) : (
                            <p>{getDateFunction(comment.createdAt)}</p>
                          )}
                        </MessageChatElement>
                      </>
                    ))}
                  </ChatColumnElement>
                  <div className="line"></div>
                  <FlexDir width={"100%"} margin="0">
                    <form
                      className="inputChat"
                      onSubmit={handleSubmit(newMessage)}
                    >
                      <FlexDir width={"100%"}>
                        <input
                          onInput={(e) => {
                            setInputValue(e.target.value);
                          }}
                          className="textArea"
                          type="text"
                          name="textComment"
                          value={inputValue}
                          id="textArea"
                          {...register("textComment")}
                        />
                        <ButtonPrimary
                          variant="normal"
                          type="submit"
                          width={"150px"}
                        >
                          Send
                        </ButtonPrimary>
                      </FlexDir>
                    </form>
                  </FlexDir>
                </>
              )}
            </ChatContainerElement>
          </>
        )}

        {isMobile && (
          <>
            {activeChat == "" && (
              <>
                <ChatContainerElement variant={"multiple"}>
                  <h2>Active Chats</h2>
                  <ChatColumnElement>
                    {isLoading && <Loading />}
                    {!isLoading &&
                      res &&
                      res?.data?.chats?.map((chat) => (
                        <>
                          <div className="line"></div>

                          <ChatDetailElement
                            key={chat}
                            variant={activeChat?._id == chat?._id && "active"}
                            onClick={(e) => {
                              setActiveChat(chat);
                            }}
                          >
                            <img
                              alt="chat user logo"
                              src={
                                chat?.userOne._id == user?._id
                                  ? chat?.userTwo?.image
                                  : chat?.userOne?.image
                              }
                            />

                            <FlexDir direction={"column"} width={"75%"}>
                              <FlexAround>
                                <h1>
                                  {chat?.userOne?._id == user?._id
                                    ? chat?.userTwo?.username
                                    : chat?.userOne?.username}
                                </h1>
                                {getDateFunction(actualDate) ==
                                getDateFunction(
                                  chat.comments[chat.comments.length - 1]
                                    .createdAt
                                ) ? (
                                  <p>
                                    {getHourFunction(
                                      chat.comments[chat.comments.length - 1]
                                        .createdAt
                                    )}
                                  </p>
                                ) : (
                                  <p>
                                    {" "}
                                    {getDateFunction(
                                      chat.comments[chat.comments.length - 1]
                                        .createdAt
                                    )}{" "}
                                  </p>
                                )}
                                {/* <p> {getDateFunction(chat.comments[chat.comments.length - 1].createdAt)} </p>    */}
                                {/* <p>{getHourFunction(chat.comments[chat.comments.length - 1].createdAt)}</p> */}
                              </FlexAround>
                              <FlexAround>
                                <p>
                                  {" "}
                                  {
                                    chat?.comments[chat?.comments?.length - 1]
                                      ?.textComment
                                  }{" "}
                                </p>
                              </FlexAround>
                            </FlexDir>
                          </ChatDetailElement>
                        </>
                      ))}
                    <div className="line"></div>
                  </ChatColumnElement>
                </ChatContainerElement>
              </>
            )}

            {activeChat != "" && (
              <>
                <ChatContainerElement variant={"individual"}>
                  {activeChat != "" && (
                    <>
                      <FlexDir
                        justifyContent={"flex-start"}
                        width={"90%"}
                        margin={"12px 0 0 0"}
                      >
                        <span
                          class="material-symbols-outlined"
                          onClick={(e) => {
                            setActiveChat("");
                          }}
                        >
                          arrow_back_ios
                        </span>
                        <img
                          alt="user logo "
                          src={activeChat?.userOne?.image}
                        />

                        <h1>{activeChat.userOne.name}</h1>
                      </FlexDir>
                      <div className="line"></div>
                      <ChatColumnElement display={"flex"} id="scroll">
                        {activeChat.comments.map((comment) => (
                          <>
                            <MessageChatElement
                              variant={
                                comment?.creator?._id == user._id
                                  ? "own"
                                  : "otherUser"
                              }
                            >
                              <p>{comment?.textComment}</p>
                              {getDateFunction(actualDate) ==
                              getDateFunction(comment.createdAt) ? (
                                <p>{getHourFunction(comment.createdAt)}</p>
                              ) : (
                                <p>{getDateFunction(comment.createdAt)}</p>
                              )}
                            </MessageChatElement>
                          </>
                        ))}
                      </ChatColumnElement>
                      <div className="line"></div>
                      <FlexDir width={"100%"} margin="0">
                        <form
                          className="inputChat"
                          onSubmit={handleSubmit(newMessage)}
                        >
                          <FlexDir width={"100%"}>
                            <input
                              onInput={(e) => {
                                setInputValue(e.target.value);
                                // console.log(inputValue);
                              }}
                              className="textArea"
                              type="text"
                              name="textComment"
                              value={inputValue}
                              id="textArea"
                              {...register("textComment")}
                            />
                            <ButtonPrimary
                              variant="normal"
                              type="submit"
                              width={"70px"}
                              // onClick={reload()}
                            >
                              Send
                            </ButtonPrimary>
                          </FlexDir>
                        </form>
                      </FlexDir>
                    </>
                  )}
                </ChatContainerElement>
              </>
            )}
          </>
        )}
      </ChatElement>
    </>
  );
};
