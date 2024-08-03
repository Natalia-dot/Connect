import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { useEffect, useState } from "react";
import { updateUser } from "../../../services/user.service";
import { useErrorRegisterpt2 } from "../../../hooks/useErrorRegisterpt2";
import {
  Anchor,
  ButtonPrimary,
  CheckboxInput,
  FlexDir,
  Form,
  H1Form,
  H3Custom,
  H3Form,
  LabelAndInput,
  RadioInput,
} from "../../../components/StyleComponents";
import { Link, Navigate } from "react-router-dom";

export const Registerpt2 = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setOkRegister] = useState(false);

  const { setUser, user, logout, login } = useAuth();
  const { handleSubmit, register } = useForm();

  const formSubmit = async (formData) => {
    // console.log(formData);

    setSend(true);
    setRes(await updateUser(formData));
    setSend(false);
  };

  useEffect(() => {
    // console.log(res);
    useErrorRegisterpt2(res, setRes, setOkRegister, login, user);
  }, [res]);

  if (okRegister) {
    return <Navigate to="/roomSearch" />;
  }

  return (
    <>
      <FlexDir>
        <Form
          heightTablet={"95vh"}
          width={"80vw"}
          height={"85vh"}
          mediaqueryWidth={"90vw"}
          onSubmit={handleSubmit(formSubmit)}
        >
          <FlexDir direction={"column"}>
            <H1Form margin={"8px 0 0 0"}>Finish Signing up</H1Form>

            <FlexDir mediaqueryDirMobile={"column"}>
              <FlexDir
                width={"40vw"}
                mediaqueryWidthMobile={"95vw"}
                direction={"column"}
              >
                <LabelAndInput alignItems={"center"}>
                  <H3Form>I'm looking for a</H3Form>
                  <RadioInput minW={"68%"}>
                    <input
                      type="radio"
                      name="roomSeeker"
                      id="roomSeeker"
                      value="roomSeeker"
                      {...register("role", { required: true })}
                    />
                    <label htmlFor="roomSeeker">Room</label>
                    <input
                      type="radio"
                      name="roommateSeeker"
                      id="roommateSeeker"
                      value="roommateSeeker"
                      {...register("role", { required: true })}
                    />
                    <label htmlFor="roommateSeeker">Roommate</label>
                  </RadioInput>
                </LabelAndInput>

                <LabelAndInput>
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="false"
                    {...register("name")}
                  />
                </LabelAndInput>
                <LabelAndInput>
                  Last name
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="false"
                    {...register("lastName")}
                  />
                </LabelAndInput>
                <LabelAndInput>
                  Date of birth
                  <input
                    type="number"
                    min="1900"
                    max="2005"
                    placeholder="YYYY"
                    name="birthYear"
                    autoComplete="false"
                    {...register("birthYear")}
                  />
                </LabelAndInput>

                <LabelAndInput inputHeight={"60px"}>
                  Brief description of yourself
                  <textarea
                    type="text"
                    placeholder="I'm very clean and organized and love cats..."
                    name="description"
                    autoComplete="false"
                    {...register("description")}
                  />
                </LabelAndInput>
              </FlexDir>
              <FlexDir
                width={"40vw"}
                mediaqueryWidthMobile={"95vw"}
                direction={"column"}
              >
                Interests
                <FlexDir>
                  <LabelAndInput gap={"4px"}>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Art
                        <input
                          type="checkbox"
                          name="Art"
                          value="Art"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>

                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Climbing
                        <input
                          type="checkbox"
                          name="Climbing"
                          value="Climbing"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Concerts
                        <input
                          type="checkbox"
                          name="Concerts"
                          value="Concerts"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>

                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Cooking
                        <input
                          type="checkbox"
                          name="Cooking"
                          value="Cooking"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>

                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Dancing
                        <input
                          type="checkbox"
                          name="Dancing"
                          value="Dancing"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>

                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Fashion
                        <input
                          type="checkbox"
                          name="Fashion"
                          value="Fashion"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>

                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Gaming
                        <input
                          type="checkbox"
                          name="Gaming"
                          value="Gaming"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>

                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Gym
                        <input
                          type="checkbox"
                          name="Gym"
                          value="Gym"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>

                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Movies
                        <input
                          type="checkbox"
                          name="Movies"
                          value="Movies"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Music
                        <input
                          type="checkbox"
                          name="Music"
                          value="Music"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                  </LabelAndInput>
                  <LabelAndInput gap={"4px"}>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Nature
                        <input
                          type="checkbox"
                          name="Nature"
                          value="Nature"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>

                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Party
                        <input
                          type="checkbox"
                          name="Party"
                          value="Party"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Pets
                        <input
                          type="checkbox"
                          name="Pets"
                          value="Pets"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Photography
                        <input
                          type="checkbox"
                          name="Photography"
                          value="Photography"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Reading
                        <input
                          type="checkbox"
                          name="Reading"
                          value="Reading"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Socializing
                        <input
                          type="checkbox"
                          name="Socializing"
                          value="Socializing"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Sports
                        <input
                          type="checkbox"
                          name="Sports"
                          value="Sports"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Technology
                        <input
                          type="checkbox"
                          name="Technology"
                          value="Technology"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Travel
                        <input
                          type="checkbox"
                          name="Travel"
                          value="Travel"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                    <div className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        Writing
                        <input
                          type="checkbox"
                          name="Writing"
                          value="Writing"
                          {...register("interests")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                  </LabelAndInput>
                </FlexDir>
              </FlexDir>
            </FlexDir>

            <ButtonPrimary
              // width={"200px"}
              type="submit"
              disabled={send}
              variant={send ? "loading" : "normal"}
            >
              {send ? "Loading..." : "COMPLETE PROFILE"}
            </ButtonPrimary>

            <FlexDir margin={"0"}>
              <Link to="/profile">
                <Anchor>Skip</Anchor>
              </Link>
            </FlexDir>
          </FlexDir>
        </Form>
      </FlexDir>
    </>
  );
};
