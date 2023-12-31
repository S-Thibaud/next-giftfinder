import React from 'react';

export type StageTransition = 'stage_in_left' | 'stage_out_left' | 'stage_in_right' | 'stage_out_right' | 'none';

export interface FormCarouselProps {
  stages: FormCarousel_Stage[];
}

export interface FormData {
  age?: number;
  gender?: string;
  category?: string;
  price?: number;
}

export interface FormCarousel_Stage {
  form: React.ComponentType<FormCarousel_Form>;
  icon: React.ReactNode;
  label: string;
}

export interface FormCarouselState {
  activeStage: number;
  stageOut: number;
  stageCompleted: Array<boolean>;
}

export interface FormCarousel_Form {
  className: string;
  index: number;
  key: number;
  setCompleted (index: number, completed: boolean): void;
  toggleStage (index: number): void;
  submitCarousel: any;
  transition: StageTransition;
}

export interface FormCarousel_StyledStage {
  transition: StageTransition;
}

export interface FormCarousel_StageButton {
  active: boolean;
  complete: boolean;
  icon: React.ReactNode;
  index: number;
  label: string;
  toggle (index: number): void;
}

export interface FormCarousel_StyledStageButton {
  complete: boolean;
  disabled: boolean;
  onClick (index: number): void;
}

export interface Form_Age {
  age: number
}
export interface Form_Gender {
  gender: string
}
export interface Form_Category {
  category: []
}
export interface Form_Price {
  price: number
}