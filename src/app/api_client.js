export async function getPositions() {
  const url = 'https://backend.azvd.net/positions/';
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const positions = await response.json();
    return positions;
  } catch (error) {
    throw new Error(`Error in getPositions: ${error.message}`);
  }
}

export async function getPosition(positionId) {
  let url = 'https://backend.azvd.net/positions/';
  url += positionId + '/';
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const position = await response.json();
    return position;
  } catch (error) {
    throw new Error(`Error in getPosition: ${error.message}`);
  }
}

export async function sendMessage(name, company, email, message) {
  const data = {
    name: name,
    company: company,
    email: email,
    message: message,
  };

  const url = 'https://backend.azvd.net/contacts/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error sending message: ${response.statusText}`);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error('Error sending message:', error.message);
    throw error; // Rethrow the error to handle it at a higher level if needed
  }
}

// Create a file, e.g., api.js
export const createApplication = async (
  name,
  email,
  linkedin,
  salaryExpectation,
  resumeFile,
  positionId
) => {
  try {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('linkedin', linkedin);
    formData.append('salary_expectation', salaryExpectation);
    formData.append('resume_file', resumeFile); // Assuming resumeFile is a File object
    formData.append('position', positionId);

    const response = await fetch('https://backend.azvd.net/applications/', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error creating application:', error);
    throw error;
  }
};
