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
import { useRouter } from 'next/router';

const FormCarousel: React.FC<FormCarouselProps> = (props) => {
  const [activeStage, setActiveStage] = useState(0);
  const [stageOut, setStageOut] = useState(-1);
  const [stageCompleted, setStageCompleted] = useState(
    props.stages.map(() => false)
  );
  const formCarouselCtx = useContext(FormCarouselContext);
  const router = useRouter();

  const toggleActiveStage = (index: number) => {
    setActiveStage(index);
    setStageOut(index); // Update the stageOut state to the current active stage
  };

  const setStageCompletedStatus = useCallback(
    (index: number, completed: boolean) => {
      setStageCompleted((prevStageCompleted) => {
        const updatedStageCompleted = [...prevStageCompleted];
        updatedStageCompleted[index] = completed;
        return updatedStageCompleted;
      });
    },
    []
  );

  const areAllStagesCompleted = useCallback(() => {
    return stageCompleted.every((completed) => completed);
  }, [stageCompleted]);

  const handleSubmitToBackend = useCallback(() => {
    // console.log(props.stages);
    // console.log("ALL STAGES ARE COMPLETED");

    console.log(formCarouselCtx);

    const url = 'http://localhost:3000/api/products/';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // barrier !
      },
      body: JSON.stringify(formCarouselCtx),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the data returned by the server
        // console.log('Response data:', responseData);

        // Redirect the user to the new page with query parameter
        localStorage.setItem('productData', JSON.stringify(responseData));
        router.push({
          pathname: '/products',
          // query: { productData: JSON.stringify(responseData) },
        });
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });
  }, [formCarouselCtx, router]);

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
              className={activeStage !== i && stageOut !== i ? `hidden` : ``}
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
