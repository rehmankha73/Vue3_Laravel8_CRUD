<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use App\Http\Resources\CompanyResouce;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CompanyController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return CompanyResouce::collection(Company::query()->latest()->get());
    }

    public function store(CompanyRequest $request): CompanyResouce
    {
        $company = Company::query()->create($request->validated());

        return new CompanyResouce($company);
    }

    public function show(Company $company)
    {
        return new CompanyResouce($company);
    }

    public function update(CompanyRequest $request, Company $company)
    {
        $company->update($request->validated());

        return new CompanyResouce($company);
    }

    public function destroy(Company $company)
    {
        $company->delete();

        return response()->json(['data' => 'Company deleted successfully!'], 200);
    }
}
