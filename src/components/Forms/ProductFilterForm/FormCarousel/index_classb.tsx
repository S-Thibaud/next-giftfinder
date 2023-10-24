import React, { useContext } from 'react';
import { Wrapper } from './Wrapper';
import { StageButton } from './StageButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import {
  FormCarouselProps,
  FormCarouselState,
  FormCarousel_Stage,
  FormCarousel_Form,
} from './types';
import { useFormikContext } from 'formik';
import { FormCarouselContext } from '@/store/form-carousel-context';

export class FormCarousel extends React.Component<
  FormCarouselProps,
  FormCarouselState
> {
  state: FormCarouselState = {
    activeStage: 0,
    stageOut: -1,
    stageCompleted: []
    // formData: {},
  };

  constructor(props: FormCarouselProps) {
    super(props);
    const stages = props.stages.map((item: FormCarousel_Stage) => {
      return false;
    });

    this.state.stageCompleted = stages;
  }

  toggleActiveStage = (index: number) => {
    this.setState({
      activeStage: index,
      stageOut: this.state.activeStage,
    });
  };

  setStageCompleted = (index: number, completed: boolean) => {
    const stageCompleted: Array<boolean> = Object.values(
      this.state.stageCompleted
    );
    stageCompleted[index] = completed;
    this.setState({ stageCompleted: stageCompleted });
  };

  // Create a function to update form data in the state
  // updateFormData = (formData: Object) => {
  //   this.setState({ formData: { ...this.state.formData, ...formData } });
  // };

  // Create a function to check if all stages are completed
  areAllStagesCompleted = () => {
    return this.state.stageCompleted.every((completed) => completed);
  };

  // Create a function to submit the combined data to the backend API
  handleSubmitToBackend = () => {
    const formCarouselCtx = useContext(FormCarouselContext);

    if (this.areAllStagesCompleted()) {
      console.log("SUBMIT TO BACKEND");
      console.log(formCarouselCtx);
      // const formik = useFormikContext();
      // const formData = formik.values;
      // console.log('Submit this data to the backend:', formData);



      // const { formData } = this.state;
      // Send formData to the backend API
      // fetch('/api/products', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   // body: JSON.stringify(formData),
      // })
      //   .then((response) => {
      //     if (response.ok) {
      //       // Handle success
      //     } else {
      //       // Handle API request errors
      //     }
      //   })
      //   .catch((error) => {
      //     // Handle fetch or network errors
      //   });
    }
  };

  render() {
    return (
      <Wrapper>
        <header>
          {this.props.stages.map((item: FormCarousel_Stage, i: number) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <FontAwesomeIcon
                  className="separator"
                  icon={faAngleDoubleRight}
                  transform="grow-4"
                />
              )}
              <StageButton
                active={i === this.state.activeStage ? true : false}
                complete={this.state.stageCompleted[i] === true}
                icon={item.icon}
                index={i}
                label={item.label}
                toggle={this.toggleActiveStage}
              />
            </React.Fragment>
          ))}
        </header>

        <div>
          {this.props.stages.map((stage: FormCarousel_Stage, i: number) => {
            const Form: React.ComponentType<FormCarousel_Form> = stage.form;

            return (
              <Form
                className={
                  this.state.activeStage !== i && this.state.stageOut !== i
                    ? `hidden`
                    : ``
                }
                index={i}
                key={i}
                setCompleted={this.setStageCompleted}
                toggleStage={this.toggleActiveStage}
                transition={
                  this.state.activeStage === i
                    ? this.state.activeStage > this.state.stageOut
                      ? `stage_in_right`
                      : `stage_in_left`
                    : this.state.stageOut === i
                    ? this.state.activeStage < this.state.stageOut
                      ? `stage_out_right`
                      : `stage_out_left`
                    : `none`
                }
                // onFormSubmit={this.updateFormData}
              />
            );
          })}
        </div>

        {/* Render a submit button to send data to the backend API */}
        <button onClick={this.handleSubmitToBackend}>
          Submit All Data to Backend
        </button>
      </Wrapper>
    );
  }
}

export default FormCarousel;
