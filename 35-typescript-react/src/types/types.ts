// 여러 파일에서 공통적으로 사용되는 타입을 모아서 관리
export interface TodoItemProp {
  id: number;
  content: string;
  completed: boolean;
}
