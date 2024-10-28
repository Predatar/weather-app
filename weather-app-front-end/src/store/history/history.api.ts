import { getHistory } from "@/service";
import { RootState } from "@/store/store";
import { IWeatherDataHistory } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHistoryData = createAsyncThunk<IWeatherDataHistory[], undefined, { rejectValue: string; state: RootState }>('weather/history', async () => {
	return await getHistory()
})