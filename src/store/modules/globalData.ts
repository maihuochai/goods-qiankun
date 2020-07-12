import { SetGlobalState } from '@/main'

export default {
  state: {
    record: []
  },
  mutations: {
    SET_RECORD (state: any, { record, fromType }: { record: string | Array<string>; fromType: 'MAIN_APPLICATION' | 'MICRO_APPLICATION' }) {
      if (fromType === 'MAIN_APPLICATION') {
        state.record = record
      } else {
        state.record.push(record)
        SetGlobalState && SetGlobalState({
          record: state.record,
          fromType: 'MICRO_APPLICATION'
        })
      }
    }
  },
  action: {},
  namespaced: true
}
