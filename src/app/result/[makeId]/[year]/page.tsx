import { Suspense } from 'react';
import Loading from '../../../components/loading';

type VehicleModel = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

async function fetchVehicleModels(
  makeId: string,
  year: string,
): Promise<VehicleModel[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );
  const data = await res.json();
  return data.Results || [];
}

const VehicleModelsList = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) => {
  const models = await fetchVehicleModels(makeId, year);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
      {models.length > 0 ? (
        <ul>
          {models.map((model) => (
            <li
              key={model.Model_ID}
              className="mb-2 p-2 rounded-md bg-gray-100"
            >
              <p className="font-bold">Make: {model.Make_Name}</p>
              <p className="text-gray-700">Model: {model.Model_Name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">
          No models found for the selected make and year.
        </p>
      )}
    </div>
  );
};

const ResultPage = ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Vehicle Models
      </h1>

      <Suspense fallback={<Loading />}>
        <VehicleModelsList makeId={params.makeId} year={params.year} />
      </Suspense>
    </div>
  );
};

export default ResultPage;
