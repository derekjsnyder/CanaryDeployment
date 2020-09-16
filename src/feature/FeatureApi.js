import axios from "axios";
import { uuidv4 } from "../Helper";

function baseAzureTableApi(table, index = "") {
  return `https://clinicalabdatadev.table.core.windows.net/${table}${index}${
    process.env.STORAGE_TOKEN
  }`;
}

function authHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json;odata=nometadata"
  };
}

export function getAllFeatureFlags() {
  var url = baseAzureTableApi("featureflag");

  return axios.get(url, { headers: authHeaders() });
}

export function getFeatureFlagByName(flagName) {
  var url = baseAzureTableApi(
    "featureflag",
    `(PartitionKey='features',RowKey='${flagName}')`
  );

  return axios.get(url, { headers: authHeaders() });
}

export function updateFeatureFlag(flagName, newValue) {
  var url = baseAzureTableApi(
    "featureflag",
    `(PartitionKey='features',RowKey='${flagName}')`
  );

  return axios({
    method: "merge",
    url: url,
    data: {
      IsActive: newValue
    },
    headers: authHeaders()
  });
}

export function addFeedback(feedback, featureType) {
  var url = baseAzureTableApi("feedback");
  var data = {
    feedback,
    featureType,
    feedbackDate: new Date().getUTCDate(),
    PartitionKey: "feedback",
    RowKey: uuidv4()
  };

  return axios.post(url, data, { headers: authHeaders() });
}

export function toggleLocal(key) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, "true");
  }
}
