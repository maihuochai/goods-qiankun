interface GlobalDataState {
  fromType: 'MAIN_APPLICATION' | 'MICRO_APPLICATION' | undefined
  record: Array<string>
}

export interface QianKunProps {
  container: HTMLElement;
  name: string;
  singleSpa: any;
  globalState: GlobalDataState;

  mountParcel (): void;

  setGlobalState (state: object): void;

  onGlobalStateChange (callBack: (state?: object, prev?: object) => void, fireImmediately?: boolean): void;
}
