import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Wrapper } from './Wrapper';
import { StageButton } from './StageButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import {
  FormCarouselProps,
  FormCarousel_Stage,
  FormCarousel_Form,
} from './types';
import { FormCarouselContext } from '@/store/form-carousel-context';

const FormCarousel: React.FC<FormCarouselProps> = (props) => {
  const [activeStage, setActiveStage] = useState(0);
  const [stageOut, setStageOut] = useState(-1);
  const [stageCompleted, setStageCompleted] = useState(props.stages.map(() => false));
  const formCarouselCtx = useContext(FormCarouselContext);

  const toggleActiveStage = (index: number) => {
    setActiveStage(index);
    setStageOut(index); // Update the stageOut state to the current active stage
  };

  const setStageCompletedStatus = useCallback((index: number, completed: boolean) => {
    setStageCompleted((prevStageCompleted) => {
      const updatedStageCompleted = [...prevStageCompleted];
      updatedStageCompleted[index] = completed;
      return updatedStageCompleted;
    });
  }, []);

  const areAllStagesCompleted = useCallback(() => {
    return stageCompleted.every((completed) => completed);
  }, [stageCompleted]);

  const handleSubmitToBackend = useCallback(() => {
    // console.log(props.stages);

      console.log("ALL STAGES ARE COMPLETED");
      console.log(formCarouselCtx);
  }, [formCarouselCtx]);

  // Trigger handleSubmitToBackend when stageCompleted changes
  useEffect(() => {
    if (areAllStagesCompleted()) {
      handleSubmitToBackend();
    }
  }, [areAllStagesCompleted, handleSubmitToBackend]);

  return (
    <Wrapper>
      <header>
        {props.stages.map((item: FormCarousel_Stage, i: number) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <FontAwesomeIcon
                className="separator"
                icon={faAngleDoubleRight}
                transform="grow-4"
              />
            )}
            <StageButton
              active={i === activeStage}
              complete={stageCompleted[i]}
              icon={item.icon}
              index={i}
              label={item.label}
              toggle={() => toggleActiveStage(i)}
            />
          </React.Fragment>
        ))}
      </header>

      <div>
        {props.stages.map((stage: FormCarousel_Stage, i: number) => {
          const Form: React.ComponentType<FormCarousel_Form> = stage.form;

          return (
            <Form
              className={
                activeStage !== i && stageOut !== i ? `hidden` : ``
              }
              index={i}
              key={i}
              setCompleted={setStageCompletedStatus}
              toggleStage={() => toggleActiveStage(i + 1)}
              submitCarousel={handleSubmitToBackend}
              transition={
                activeStage === i
                  ? activeStage > stageOut
                    ? `stage_in_right`
                    : `stage_in_left`
                  : stageOut === i
                  ? activeStage < stageOut
                    ? `stage_out_right`
                    : `stage_out_left`
                  : `none`
              }
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default FormCarousel;
