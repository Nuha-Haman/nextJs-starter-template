export interface IsStateInterface {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  isSent: boolean;
  isUpdated: boolean;
  isDeleted: boolean;
  isRestored?: boolean;
  isLoadingAll?: boolean;
}
